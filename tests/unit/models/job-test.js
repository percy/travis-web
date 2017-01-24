import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('job', 'Unit | Model | job', {
  needs: ['model:repo', 'model:build', 'model:commit']
});

test('created state', function (assert) {
  const model = this.subject();
  Ember.run(function () {
    return model.setProperties({
      state: 'created'
    });
  });
  assert.equal(model.get('isFinished'), false, 'queued state is not finished');
  assert.equal(model.get('toBeQueued'), true, 'queued state is to be queued');
  assert.equal(model.get('toBeStarted'), false, 'queued state is not to be started');
  assert.equal(model.get('notStarted'), true, 'queued state has not started');
});

test('queued state', function (assert) {
  const model = this.subject();
  Ember.run(function () {
    return model.setProperties({
      state: 'queued'
    });
  });
  assert.equal(model.get('isFinished'), false, 'queued state is not finished');
  assert.equal(model.get('toBeQueued'),  false, 'queued state is not to be queued');
  assert.equal(model.get('toBeStarted'), true, 'queued state is to be started');
  assert.equal(model.get('notStarted'), true, 'queued state has not started');
});
