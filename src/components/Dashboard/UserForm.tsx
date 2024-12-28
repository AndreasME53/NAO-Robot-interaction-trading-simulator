import React from 'react';
import hookForms from 'utils/hookForms';
import { UserFormWrapper } from './userInfoFormStyle';
import FormContainer from 'components/Common/FormContainer';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Row, Col, Container, Form, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function UserStockInfoForm({ setShowFormAction, addUserStockInfoAction }) {
  const methods = useForm({ mode: 'all' });
  const {
    control,
    register,
    formState: { isValid, errors }
  } = methods;

  const handleSubmit = () => {
    const form = hookForms.getForm('USER_STOCK_INFO');
    form.handleSubmit(async values => {
      addUserStockInfoAction(values);
    })();
    setShowFormAction(false);
  };

  return (
    <Modal isOpen={true} toggle={() => setShowFormAction(false)}>
      <ModalHeader>{'Add Stock Info'}</ModalHeader>
      <ModalBody>
        <Container fluid>
          <UserFormWrapper>
            <FormProvider {...methods}>
              <Form>
                <FormContainer name={'USER_STOCK_INFO'} />

                <Label>Participant's Name</Label>
                <Controller
                  defaultValue={''}
                  control={control}
                  {...register('participantsName', { required: true })}
                  render={({ field }) => <Input {...field} className="input-text mb-2" placeholder="Enter Participant's Name" />}
                />
                {errors?.participantsName && errors?.participantsName.type === 'required' && (
                  <span className="field-error">Participant's Name is required</span>
                )}
                <Row className="mb-2">
                  <Col md={6}>
                    <Label>Time Duration</Label>
                    <Controller
                      control={control}
                      {...register('timeDuration', { required: true })}
                      render={({ field }) => <Input {...field} min={1} max={10} type="number" className="input-text" placeholder="Add Time Duration" />}
                    />
                    {errors?.timeDuration && errors?.timeDuration.type === 'required' && <span className="field-error">Time Duration is required</span>}
                  </Col>
                  <Col md={6} className="mt-8">
                    <Label>Robot Explanation</Label>
                    <Controller defaultValue={false} name="robotExplanation" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                  </Col>
                </Row>

                <Label>Balance</Label>
                <Controller
                  defaultValue={''}
                  control={control}
                  {...register('balance', { required: true })}
                  render={({ field }) => <Input {...field} className="input-text mb-2" placeholder="Add Balance" />}
                />
                {errors?.balance && errors?.balance.type === 'required' && <span className="field-error"> Balance is required</span>}
                <div>
                  <Label>Goal Balance</Label>
                  <Controller
                    defaultValue={''}
                    control={control}
                    {...register('goalBalance', { required: true })}
                    render={({ field }) => <Input {...field} className="input-text mb-2" placeholder="Add Goal Balance" />}
                  />
                  {errors?.goalBalance && errors?.goalBalance.type === 'required' && <span className="field-error">Goal Balance is required</span>}
                </div>
                <Row>
                  <Col md={6}>
                    <Label>High Risk Stocks</Label>
                    <Controller defaultValue={false} name="highRiskStocks" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                  </Col>
                  <Col md={6}>
                    <Label>Low Risk Stocks</Label>
                    <Controller defaultValue={false} name="lowRiskStocks" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          </UserFormWrapper>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" type="button" className="btn btn-sm" disabled={!isValid} onClick={() => handleSubmit()}>
          <b> Save</b>
        </Button>
      </ModalFooter>
    </Modal>
  );
}
