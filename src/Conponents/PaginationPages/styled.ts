import styled from 'styled-components'

export const ButtonNext = styled.button<{ isShowButton: boolean }>`
  display: ${({isShowButton}) => isShowButton ? 'block' : 'none'};
  position: absolute;
  left: 268px;
`
