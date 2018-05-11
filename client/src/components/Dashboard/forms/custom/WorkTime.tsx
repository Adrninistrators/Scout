import * as React from 'react'
import { Cascader, Button, Row, Col } from 'antd'
import WorkTimeChart from './WorkTimeChart'
import { range } from 'lodash'

const minutes = range(12).map((_, i) => ({
  value: i * 5 + '',
  label: `${i < 2 ? '0' : ''}${i * 5}分`,
}))
const time = range(24).map((_, i) => ({
  value: i + '',
  label: `${i < 10 ? '0' : ''}${i}时`,
  children: minutes,
}))
const options = [
  { value: '0', label: '星期天', children: time },
  { value: '1', label: '星期一', children: time },
  { value: '2', label: '星期二', children: time },
  { value: '3', label: '星期三', children: time },
  { value: '4', label: '星期四', children: time },
  { value: '5', label: '星期五', children: time },
  { value: '6', label: '星期六', children: time },
]

const displayRenderFactory = (descriptor: string, label: string[]) => {
  if (label && label.length) {
    const [week, hour, minute] = label
    return `${descriptor}${week}的${hour}${minute}`
  }
  return ''
}
const displayRenderFrom = displayRenderFactory.bind(null, '从')
const displayRenderTo = displayRenderFactory.bind(null, '至')

interface P {
  value?: string[][][]
  onChange?: (e: any) => any
  disabled?: boolean
}

export default class WorkTime extends React.Component<P> {
  static defaultProps = {
    value: [],
    onChange: (e: any) => e,
  }

  state = {
    workTime: this.props.value || [],
  }

  componentWillReceiveProps(nextProps: P) {
    this.setState({
      workTime: nextProps.value,
    })
  }
  update(value: string[], i: number, j: number) {
    this.state.workTime[i][j] = value
    this.props.onChange!(this.state.workTime)
  }
  add = () => {
    this.props.onChange!(this.state.workTime.concat([[]]))
  }
  del(i: number) {
    this.state.workTime.splice(i, 1)
    this.props.onChange!(this.state.workTime)
  }
  render() {
    const CascaderProps: any = {
      size: 'large',
      allowClear: false,
      expandTrigger: 'hover',
      options,
    }
    return (
      <div>
        <WorkTimeChart workTime={this.state.workTime as any} />
        {this.state.workTime.map((r, i) => (
          <Row
            type="flex"
            justify="space-between"
            style={{ marginBottom: '8px' }}
            key={i}
          >
            <Col span={10}>
              <Cascader
                {...CascaderProps}
                placeholder="从"
                displayRender={displayRenderFrom}
                value={this.state.workTime[i][0]}
                onChange={value => {
                  this.update(value, i, 0)
                }}
              />
            </Col>
            <Col span={10}>
              <Cascader
                {...CascaderProps}
                placeholder="至"
                displayRender={displayRenderTo}
                value={this.state.workTime[i][1]}
                onChange={value => {
                  this.update(value, i, 1)
                }}
              />
            </Col>
            <Button
              type="ghost"
              icon="delete"
              onClick={() => {
                this.del(i)
              }}
            >
              删除
            </Button>
          </Row>
        ))}
        <Button
          type="dashed"
          size="large"
          icon="plus"
          disabled={this.props.disabled}
          onClick={this.add}
          style={{ width: '100%' }}
        >
          添加时间段
        </Button>
      </div>
    )
  }
}
