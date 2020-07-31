// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

describe('ListProviderMonthAvailability', () => {
  let fakeAppointmentRepository: FakeAppointmentsRepository;
  let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 5, 20, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 9, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 10, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 11, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 12, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 13, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 15, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 16, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 20, 17, 0, 0),
    });
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      month: 7,
      year: 2020,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
