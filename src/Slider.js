import React from 'react'; 
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class CustomRange extends React.Component {
  constructor(props){
    super(props);
      const {Range} = Slider; 
      this.handleChange = this.handleChange.bind(this)
      this.state = {sliderValues: [this.props.startYear,this.props.endYear]}
    }
    handleChange = sliderValues => {
      this.setState({sliderValues})
      this.props.onStartYearChange(sliderValues[0]);
      this.props.onEndYearChange(sliderValues[1]);

    };
  render() {

  const startYear = this.props.startYear
  const endYear = this.props.endYear
    
  return(
  <Range
  defaultValue={[startYear,endYear]}
  min={1926}
  max={2019}
  tipFormatter={value => `${value}`}
  onChange = {this.handleChange} 
  />
  );
  }
}

export default CustomRange; 
 
