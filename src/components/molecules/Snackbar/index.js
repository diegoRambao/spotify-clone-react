// import { useState, useEffect } from 'react'
import { Container, Button, ContainerWith } from './style'
import { Box } from 'components/atoms'
import { CgClose } from 'react-icons/cg'
import { BsCheckCircle } from 'react-icons/bs'
import { BiErrorCircle } from 'react-icons/bi'
import { IoMdWarning } from 'react-icons/io'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const iconsSnackSeverity = {
  error: <BiErrorCircle color='#fff' />,
  warning: <IoMdWarning color='#fff' />,
  info: <AiOutlineInfoCircle color='#fff' />,
  success: <BsCheckCircle color='#fff' />
}

export function Snackbar ({ open, onClose, children, severity }) {
//   console.log(open)
//   const [show, setShow] = useState(open)

  //   useEffect(() => {
  //     setShow(open)
  //   }, [open])

  return (
    open && (
      <ContainerWith>
        <Container severity={severity}>
          <Box className='d-flex align-items-center'>
            {severity && iconsSnackSeverity[severity]}
            <p>{children}</p>
          </Box>
          <Button onClick={onClose}>
            <CgClose />
          </Button>
        </Container>
      </ContainerWith>
    )
  )
}
