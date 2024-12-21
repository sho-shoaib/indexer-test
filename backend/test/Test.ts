import assert from "assert";
import { 
  TestHelpers,
  Mirav1core_TotalSupplyEvent
} from "generated";
const { MockDb, Mirav1core } = TestHelpers;

describe("Mirav1core contract TotalSupplyEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Mirav1core contract TotalSupplyEvent event
  const event = Mirav1core.TotalSupplyEvent.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  it("Mirav1core_TotalSupplyEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Mirav1core.TotalSupplyEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMirav1coreTotalSupplyEvent = mockDbUpdated.entities.Mirav1core_TotalSupplyEvent.get(
      `${event.chainId}_${event.block.height}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMirav1coreTotalSupplyEvent: Mirav1core_TotalSupplyEvent = {
      id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMirav1coreTotalSupplyEvent, expectedMirav1coreTotalSupplyEvent, "Actual Mirav1coreTotalSupplyEvent should be the same as the expectedMirav1coreTotalSupplyEvent");
  });
});
