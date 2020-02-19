"use strict";

/* eslint-disable global-require */
var makeRule = require('./utils/makeRule');

module.exports = {
  rules: {
    'accessible-emoji': makeRule('accessible-emoji'),
    'alt-text': makeRule('alt-text'),
    'anchor-has-content': makeRule('anchor-has-content'),
    'anchor-is-valid': makeRule('anchor-is-valid'),
    'aria-activedescendant-has-tabindex': makeRule('aria-activedescendant-has-tabindex'),
    'aria-props': makeRule('aria-props'),
    'aria-proptypes': makeRule('aria-proptypes'),
    'aria-role': makeRule('aria-role'),
    'aria-unsupported-elements': makeRule('aria-unsupported-elements'),
    'autocomplete-valid': makeRule('autocomplete-valid'),
    'click-events-have-key-events': makeRule('click-events-have-key-events'),
    'control-has-associated-label': makeRule('control-has-associated-label'),
    'heading-has-content': makeRule('heading-has-content'),
    'html-has-lang': makeRule('html-has-lang'),
    'iframe-has-title': makeRule('iframe-has-title'),
    'img-redundant-alt': makeRule('img-redundant-alt'),
    'interactive-supports-focus': makeRule('interactive-supports-focus'),
    'label-has-associated-control': makeRule('label-has-associated-control'),
    'label-has-for': makeRule('label-has-for'),
    lang: makeRule('lang'),
    'media-has-caption': makeRule('media-has-caption'),
    'mouse-events-have-key-events': makeRule('mouse-events-have-key-events'),
    'no-access-key': makeRule('no-access-key'),
    'no-autofocus': makeRule('no-autofocus'),
    'no-distracting-elements': makeRule('no-distracting-elements'),
    'no-interactive-element-to-noninteractive-role': makeRule('no-interactive-element-to-noninteractive-role'),
    'no-noninteractive-element-interactions': makeRule('no-noninteractive-element-interactions'),
    'no-noninteractive-element-to-interactive-role': makeRule('no-noninteractive-element-to-interactive-role'),
    'no-noninteractive-tabindex': makeRule('no-noninteractive-tabindex'),
    'no-onchange': makeRule('no-onchange'),
    'no-redundant-roles': makeRule('no-redundant-roles'),
    'no-static-element-interactions': makeRule('no-static-element-interactions'),
    'role-has-required-aria-props': makeRule('role-has-required-aria-props'),
    'role-supports-aria-props': makeRule('role-supports-aria-props'),
    scope: makeRule('scope'),
    'tabindex-no-positive': makeRule('tabindex-no-positive')
  },
  configs: {
    recommended: {
      plugins: ['jsx-a11y'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'jsx-a11y/accessible-emoji': 'error',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/control-has-associated-label': ['off', {
          ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
          ignoreRoles: ['grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'row', 'tablist', 'toolbar', 'tree', 'treegrid'],
          includeRoles: ['alert', 'dialog']
        }],
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': ['error', {
          tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox']
        }],
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/media-has-caption': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
          tr: ['none', 'presentation']
        }],
        'jsx-a11y/no-noninteractive-element-interactions': ['error', {
          handlers: ['onClick', 'onError', 'onLoad', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
          alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          body: ['onError', 'onLoad'],
          dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          iframe: ['onError', 'onLoad'],
          img: ['onError', 'onLoad']
        }],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
          table: ['grid'],
          td: ['gridcell']
        }],
        'jsx-a11y/no-noninteractive-tabindex': ['error', {
          tags: [],
          roles: ['tabpanel'],
          allowExpressionValues: true
        }],
        'jsx-a11y/no-onchange': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': ['error', {
          allowExpressionValues: true,
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
        }],
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error'
      }
    }
  }
};