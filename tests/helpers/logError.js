import { before, after } from 'mocha';
import sinon from 'sinon';

export default function logError() {
  // Since react will console.error propType warnings, that which we'd rather have
// as errors, we use sinon.js to stub it into throwing these warning as errors
// instead.
  before(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
  });
// While not forgetting to restore it afterwards
  after(() => { console.error.restore(); });
}
