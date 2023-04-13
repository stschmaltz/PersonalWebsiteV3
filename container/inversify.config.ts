import 'reflect-metadata';

import { Container } from 'inversify';

const appContainer = new Container();

// appContainer
//   .bind<ExerciseSearchProviderInterface>(TYPES.ExerciseSearcher)
//   .toConstantValue(new ExerciseSearcher(allExercises));

export { appContainer };
