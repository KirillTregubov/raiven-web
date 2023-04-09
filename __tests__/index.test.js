import { render, screen } from '@testing-library/react'

import RootLayout from '@/app/layout' //, { metadata }
import Home from '@/app/page'

import Prompt from '@/app/signup/[establishment_id]/Prompt'
import SignupPage from '@/app/signup/[establishment_id]/page'

describe('Layout', () => {
  it('renders a heading', () => {
    render(<RootLayout />)
  })
})

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'RAIVEN'
    })

    expect(heading).toBeInTheDocument()
  })
})

jest.spyOn(window, 'prompt').mockImplementation(() => '10.0.0.1')
const location = {
  ...window.location,
  replace: jest.fn()
}
jest.spyOn(location, 'replace')

describe('Prompt', () => {
  it('shows not found correctly', () => {
    render(<Prompt />)

    const heading = screen.getByText('Establishment ID not found')
    expect(heading).toBeInTheDocument()
  })

  it('shows open link correctly', () => {
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: jest.fn().mockImplementation(() => ['10.0.0.1', jest.fn()])
    }))

    render(<Prompt establishment_id="2000" />)

    const heading = screen.getByText('Open link')
    expect(heading).toBeInTheDocument()
  })
})

describe('Signup Page', () => {
  it('renders a heading', () => {
    render(<SignupPage params={{ establishment_id: '2000' }} />)

    const heading = screen.getByText('Open link')
    expect(heading).toBeInTheDocument()
  })
})
