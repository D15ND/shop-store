import { HStack, IconButton, NumberInput } from '@chakra-ui/react';
import { LuMinus, LuPlus } from 'react-icons/lu';

const CounterStepper = () => {
  return (
    <NumberInput.Root defaultValue="1" unstyled spinOnPress={false} min={1}>
      <HStack gap="2">
        <NumberInput.DecrementTrigger asChild>
          <IconButton variant="outline" size="sm">
            <LuMinus />
          </IconButton>
        </NumberInput.DecrementTrigger>
        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
        <NumberInput.IncrementTrigger asChild>
          <IconButton variant="outline" size="sm">
            <LuPlus />
          </IconButton>
        </NumberInput.IncrementTrigger>
      </HStack>
    </NumberInput.Root>
  );
};

export default CounterStepper;
