import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../context/CyclesContext';

import { FormContainer, MinutesAmountInput, TaskInput } from './styles';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em </label>
      <TaskInput
        id='task'
        placeholder='Dê um nome para o seu projeto'
        type='text'
        list='task-suggestions'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='task-suggestions'>
        <option value='Projeto 1' />
        <option value='Projeto 2' />
        <option value='Projeto 3' />
      </datalist>
      <label htmlFor='minutesAmount'>durante</label>
      <MinutesAmountInput
        id='minutesAmount'
        placeholder='00'
        type='number'
        step={5}
        min={5}
        max={90}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  );
}
