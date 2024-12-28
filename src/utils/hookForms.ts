export class Forms {
  forms: any;
  constructor() {
    this.forms = [];
  }

  public addForm = (formName: string, ref: any) => {
    this.forms[formName] = ref;
  };

  public getForm = (formName: any) => {
    return this.forms[formName];
  };

  public removeForm = (formName: any) => {
    delete this.forms[formName];
  };

  public reset = () => {
    this.forms = [];
  };
}

export default new Forms();
