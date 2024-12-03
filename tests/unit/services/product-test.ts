import { module, test } from 'qunit';
import { setupTest } from 'ember-ts/tests/helpers';

module('Unit | Service | product', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:product');
    assert.ok(service);
  });
});
