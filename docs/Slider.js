import styled from 'styled-components'

const Slider = styled.input`
  display: block;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 0;
  margin-right: 0;
  height: 2px;
  cursor: pointer;
  color: inherit;
  background-color: rgba(255, 255, 255, .25);
  border-radius: 0;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    background-color: currentcolor;
    border: 0;
    border-radius: 9999px;
    appearance: none;
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, .5);
  }
`

Slider.defaultProps = {
  type: 'range'
}

export default Slider
