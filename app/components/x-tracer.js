/* global TravisTracer, window */

import Ember from 'ember';
import Component from '@ember/component';
import { action } from 'ember-decorators/object';

export default Component.extend({
  tagName: 'div',
  panelIsOpen: false,
  requests: [],

  init() {
    this._super(...arguments);

    if (window.localStorage.TravisTracerIsOpen) {
      this.panelIsOpen = true;
    }

    TravisTracer.onRequest = req => {
      this.get('requests').pushObject(req);
      this.ensurePanelScrolledToBottom();
    };
  },

  @action
  toggleOpen() {
    this.toggleProperty('panelIsOpen');
    this.rememberPanelOpenState();
    this.ensurePanelScrolledToBottom();
  },

  ensurePanelScrolledToBottom() {
    Ember.run.next(() => {
      let panel = document.getElementById('tracer-panel');
      panel.scrollTop = panel.scrollHeight + 20;
    });
  },

  rememberPanelOpenState() {
    if (this.get('panelIsOpen')) {
      window.localStorage.TravisTracerIsOpen = 'true';
    } else {
      delete window.localStorage.TravisTracerIsOpen;
    }
  }
});
