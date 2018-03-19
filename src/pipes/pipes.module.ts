import { NgModule } from '@angular/core';
import { CPlaceholderPipe } from './c-placeholder/c-placeholder';
import { PendientesPipe } from './pendientes/pendientes';
@NgModule({
	declarations: [CPlaceholderPipe,
    PendientesPipe],
	imports: [],
	exports: [CPlaceholderPipe,
    PendientesPipe]
})
export class PipesModule {

	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: [],
		};
	}
}
