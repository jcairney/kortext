import {NgModule} from '@angular/core';
import {JoinPipe} from 'src/app/pipes/join.pipe';

@NgModule({
  declarations: [
    JoinPipe,
  ],
  exports: [
    JoinPipe,
  ]
})
export class PipesModule {}
