import assert from "assert";
import { 
  TestHelpers,
  Mirav1mainnet_SwapEvent
} from "generated";
const { MockDb, Mirav1mainnet } = TestHelpers;

describe("Mirav1mainnet contract SwapEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Mirav1mainnet contract SwapEvent event
  const event = Mirav1mainnet.SwapEvent.mock({data: {} /* It mocks event fields with default values, so you only need to provide data */});

  it("Mirav1mainnet_SwapEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Mirav1mainnet.SwapEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMirav1mainnetSwapEvent = mockDbUpdated.entities.Mirav1mainnet_SwapEvent.get(
      `${event.chainId}_${event.block.height}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMirav1mainnetSwapEvent: Mirav1mainnet_SwapEvent = {
      id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMirav1mainnetSwapEvent, expectedMirav1mainnetSwapEvent, "Actual Mirav1mainnetSwapEvent should be the same as the expectedMirav1mainnetSwapEvent");
  });
});
