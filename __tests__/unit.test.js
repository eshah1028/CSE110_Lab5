// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone numbers', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone numbers', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone numbers', () => {
  expect(isPhoneNumber('1234-567-890')).toBe(false);
});

test('invalid phone numbers', () => {
  expect(isPhoneNumber('345678910')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('xyz@gmail.com')).toBe(true);
})

test('valid email', () => {
  expect(isEmail('xyz@outlook.in')).toBe(true);
})

test('invalid email', () => {
  expect(isEmail('@gmail.com')).toBe(false);
})

test('invalid email', () => {
  expect(isEmail('xyz@com')).toBe(false);
})

test('strong password', () => {
  expect(isStrongPassword('hello')).toBe(true);
})

test('strong password', () => {
  expect(isStrongPassword('he_llo_123')).toBe(true);
})

test('weak password', () => {
  expect(isStrongPassword('@123')).toBe(false);
})

test('weak password', () => {
  expect(isStrongPassword('123456789101112131415')).toBe(false);
})

test('valid dates', () => {
  expect(isDate('1/2/2026')).toBe(true);
})

test('valid dates', () => {
  expect(isDate('11/12/2026')).toBe(true);
})

test('invalid dates', () => {
  expect(isDate('2026/11/12')).toBe(false);
})

test('invalid dates', () => {
  expect(isDate('11.12.2026')).toBe(false);
})

test('valid hex colors', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex colors', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('invalid hex colors', () => {
  expect(isHexColor('#gff')).toBe(false);
});

test('invalid hex colors', () => {
  expect(isHexColor('#12345')).toBe(false);
});