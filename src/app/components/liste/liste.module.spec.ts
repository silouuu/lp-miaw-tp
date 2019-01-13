import { ListeModule } from './liste.module';

describe('ListeModule', () => {
  let listeModule: ListeModule;

  beforeEach(() => {
    listeModule = new ListeModule();
  });

  it('should create an instance', () => {
    expect(listeModule).toBeTruthy();
  });
});
