import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-ts/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProductList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProductList>
        template block text
      </ProductList>
    `);

    assert.dom().hasText('template block text');
  });
});
