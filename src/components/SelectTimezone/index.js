import { Select } from 'antd';

import './style.scss';

const { Option } = Select;

const SelectTimezone = ({ data, onChange }) => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a timezone"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        data.map((item, index) => <Option key={index} value={item}>{item}</Option>)
      }
    </Select>
  )
  
}

export default SelectTimezone;
