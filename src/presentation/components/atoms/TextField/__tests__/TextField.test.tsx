import React from 'react'
import renderer from 'react-test-renderer'
import TextField from '..'
import showError from '../showError'

const TextFieldWithTheme = TextField
const label = 'Email'
const placeholder = 'peter@boticario.com'
const types = ['email', 'password', 'text']
const icon = <svg></svg>
const value = 'venom@boticario.com'

const errorString = 'O nome deve ter mais de 3 caracteres.'
const ErrorNode = () => <div>Valor inválido. Consulte <a href="/">aqui</a> para mais informações</div>

const alertString = 'Nome é a forma como chamamos alguém.'
const AlertNode = () => <div>Você quis dizer <a href="/">peter@boticario.com</a>?</div>

/** showError function */
const metaWithoutTouched = { touched: false }
const metaWithTouched = { touched: true }
const metaWithLastEdited = { dirtySinceLastSubmit: true }
const metaWithError = { touched: true, error: 'the third movie of Sam Raimi is a mess' }
const metaWithSubmitError = { touched: true, submitError: 'very bad' }

describe('given: TextField', () => {
  describe('checking: properties', () => {
    test('render a TextField with label when label is not empty', () => {
      const snap = renderer.create(<TextFieldWithTheme label={label} />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a TextField with placeholder when placeholder is not empty', () => {
      const snap = renderer.create(<TextFieldWithTheme placeholder={placeholder} />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a TextField with icon before input when icon is not empty', () => {
      const snap = renderer.create(<TextFieldWithTheme icon={icon} />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
  describe('checking: state properties', () => {
    test('render a simple TextField when do not receive props', () => {
      const snap = renderer.create(<TextFieldWithTheme />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a TextField with label and required when label is not empty and required is true', () => {
      const snap = renderer.create(<TextFieldWithTheme label={label} required />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a TextField with value when value is not empty', () => {
      const snap = renderer.create(<TextFieldWithTheme value={value} />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a TextField with type when type is not empty', () => {
      const snapEmail = renderer.create(<TextFieldWithTheme type={types[0]} />).toJSON()
      const snapPass = renderer.create(<TextFieldWithTheme type={types[1]} />).toJSON()
      const snapText = renderer.create(<TextFieldWithTheme type={types[2]} />).toJSON()
      expect(snapEmail).toMatchSnapshot()
      expect(snapPass).toMatchSnapshot()
      expect(snapText).toMatchSnapshot()
    })
    test('render a selected TextField when selected is true', () => {
      const snap = renderer.create(<TextFieldWithTheme value={value} selected />).toJSON()
      expect(snap).toMatchSnapshot()
    })
    test('render a disabled TextField when disabled is true', () => {
      const snap = renderer.create(<TextFieldWithTheme value={value} disabled />).toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
  describe('checking: hint (bottom text) properties', () => {
    test('render a TextField with error hint when error is not null', () => {
      const snapWithString = renderer.create(
        <TextFieldWithTheme error={errorString} />
      ).toJSON()
      const snapWithNode = renderer.create(
        <TextFieldWithTheme error={<ErrorNode />} />
      ).toJSON()
      expect(snapWithString).toMatchSnapshot()
      expect(snapWithNode).toMatchSnapshot()
    })
    test('render a TextField with alert hint when alert is not null', () => {
      const snapWithString = renderer.create(
        <TextFieldWithTheme alert={alertString} />
      ).toJSON()
      const snapWithNode = renderer.create(
        <TextFieldWithTheme alert={<AlertNode />} />
      ).toJSON()
      expect(snapWithString).toMatchSnapshot()
      expect(snapWithNode).toMatchSnapshot()
    })
  })
  describe('checking: showError function', () => {
    test('returns empty when is not touched yet or is modified before re-submit or is touched but dont have error', () => {
      expect(showError(metaWithoutTouched)).toEqual('')
      expect(showError(metaWithLastEdited)).toEqual('')
      expect(showError(metaWithTouched)).toEqual('')
    })
    test('returns the message error when has any error in meta and should render error', () => {
      expect(showError(metaWithError)).toEqual(metaWithError.error)
      expect(showError(metaWithSubmitError)).toEqual(metaWithSubmitError.submitError)
    })
  })
})
