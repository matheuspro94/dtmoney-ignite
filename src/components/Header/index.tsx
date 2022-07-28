import { useState } from 'react'


import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void
}


export const Header = ({ onOpenNewTransactionsModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
