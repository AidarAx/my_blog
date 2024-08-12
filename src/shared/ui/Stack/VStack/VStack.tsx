import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  return (
    <Flex direction='column' {...props}/>
  )
}
