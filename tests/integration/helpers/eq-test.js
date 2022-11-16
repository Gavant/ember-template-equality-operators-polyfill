import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

import { setupRenderingTest } from 'dummy/tests/helpers';

module('Integration | Helper | eq', function (hooks) {
  setupRenderingTest(hooks);

  test('Failure if 1 arg passed in', async function (assert) {
    assert.expect(1);
    setupOnerror(function (err) {
      assert.ok(err);
    });
    this.set('first', '1234');
    await render(hbs`{{eq this.first}}`);
    resetOnerror();
  });

  test('Failure if more than 2 args passed in', async function (assert) {
    assert.expect(1);
    setupOnerror(function (err) {
      assert.ok(err);
    });
    this.set('first', '1234');
    this.set('second', '1234');
    this.set('third', '1234');
    await render(hbs`{{eq this.first this.second this.third}}`);
    resetOnerror();
  });

  test('Equality passes', async function (assert) {
    this.set('first', '1234');
    this.set('second', '1234');

    await render(hbs`{{eq this.first this.second}}`);

    assert.dom(this.element).hasText('true');
  });

  test('Equality fails', async function (assert) {
    this.set('first', '1234');
    this.set('second', 1234);

    await render(hbs`{{eq this.first this.second}}`);

    assert.dom(this.element).hasText('false');
  });
});
