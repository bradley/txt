// TODO: Internationalisation
export function dialog(name, opts, t) {
  switch (name) {
    case 'willRevert':
      return {
        type: 'question',
        buttons: [ t.t('verbs.discard'), t.t('verbs.cancel') ],
        defaultId: 0,
        cancelId: 1,
        message: t.t('dialogs.revertFile.title', { name: opts.documentName }),
        detail: t.t('dialogs.revertFile.detail'),
        modal: 'message'
      }
    break

    case 'hasChanges':
      return {
        type: 'question',
        buttons: [ t.t('verbs.save'), t.t('verbs.discard'), t.t('verbs.cancel') ],
        defaultId: 0,
        cancelId: 2,
        message: t.t('dialogs.modifiedFile.title', { name: opts.documentName }),
        detail: t.t('dialogs.modifiedFile.detail'),
        modal: 'message'
      }
    break

    case 'authorExport':
      return {
        title: t.t('verbs.export'),
        buttonLabel: t.t('verbs.export'),
        filters: [
          { name: t.t('nouns.authorProfile'), extensions: ['txtkey'] }
        ],
        defaultPath: opts.fn + '.txtkey',
        modal: 'save'
      }
    break

    case 'authorImport':
      return {
        title: t.t('verbs.import'),
        buttonLabel: t.t('verbs.import'),
        properties: [
          'openFile'
        ],
        filters: [
          { name: t.t('nouns.authorProfile'), extensions: ['txtkey'] }
        ],
        modal: 'open'
      }
    break

    case 'askToDeleteAuthor':
      return {
        type: 'warning',
        buttons: [ t.t('verbs.cancel'), t.t('verbs.saveAndDeleteForever'), t.t('verbs.deleteForever')],
        defaultId: 0,
        cancelId: 3,
        message: t.t('dialogs.askToDeleteAuthor.title', { name: opts.name }),
        detail: t.t('dialogs.askToDeleteAuthor.detail'),
        modal: 'message'
      }
    break

    case 'saveNew':
      return {
        title: t.t('verbs.save'),
        buttonLabel: t.t('verbs.save'),
        filters: [
          { name: t.t('nouns.encryptedText'), extensions: ['gpg'] }
        ],
        filename: '.gpg',
        modal: 'save'
      }

    case 'open':
      return {
        title: t.t('verbs.open'),
        buttonLabel: t.t('verbs.open'),
        properties: [
          'openFile'
        ],
        filters: [
          { name: t.t('nouns.encryptedText'), extensions: ['gpg'] }
        ],
        modal: 'open'
      }
    break
    case 'error':
      return {
        type: 'error',
        buttons: [ t.t('verbs.ok'), t.t('verbs.help') ],
        defaultId: 0,
        cancelId: 1,
        message: t.t('dialogs.error.title', { msg: opts.errorTitle }),
        detail: t.t('dialogs.error.detail'),
        modal: 'error'
      }
    case 'prefs':
      return {
        window: {
          backgroundColor: '#000',
          height: 550,
          width: 480,
          modal: true,
          resizable: false,
          show: false,
          webPreferences: {
            nodeIntegration: true,
          }, // TODO Remove this for security reasons
        },
        modal: 'modal'
      }
    break

    default:
      return {
        window: {
          backgroundColor: '#000',
          frame: false,
          height: 780,
          minHeight: 200,
          minWidth: 320,
          nodeIntegration: true,
          resizable: true,
          sandbox: true,
          scrollBounce: true,
          show: false,
          width: 620,
          webPreferences: {
            nodeIntegration: true,
          } // TODO Remove this for security reasons
        },
      }
    break
  }
}
