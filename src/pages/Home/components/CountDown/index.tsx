import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { CyclesContext } from '../../../../context/CyclesContext';
import { CountDownContainer, Separator } from './styles';

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');
  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      // because set interval seconds passed ins't precise I need to compare dates
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(0);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle?.startDate,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ]);
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}-${activeCycle.task}`;
    } else {
      document.title = 'Podomodoro Timer';
    }
  }, [minutes, seconds, activeCycle?.task, setSecondsPassed]);
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
}
