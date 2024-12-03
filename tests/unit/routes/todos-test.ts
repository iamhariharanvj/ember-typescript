import { module, test } from 'qunit';
import { setupTest } from 'ember-ts/tests/helpers';

module('Unit | Route | todos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:todos');
    assert.ok(route);
  });
});
