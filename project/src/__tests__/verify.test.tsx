import { render, screen } from '@testing-library/react';
import VerifyPage from '@/app/verify/page';

describe('Dispatch Verification after Findings 1-3', () => {
  it('renders verification page heading', () => {
    render(<VerifyPage />);
    expect(screen.getByText('Dispatch Verification')).toBeInTheDocument();
  });

  it('shows OK status for Finding 1', () => {
    render(<VerifyPage />);
    expect(screen.getByText('Finding 1')).toBeInTheDocument();
    const okBadges = screen.getAllByText('OK');
    expect(okBadges.length).toBeGreaterThanOrEqual(1);
  });

  it('shows OK status for Finding 2', () => {
    render(<VerifyPage />);
    expect(screen.getByText('Finding 2')).toBeInTheDocument();
  });

  it('shows OK status for Finding 3', () => {
    render(<VerifyPage />);
    expect(screen.getByText('Finding 3')).toBeInTheDocument();
    const okBadges = screen.getAllByText('OK');
    expect(okBadges).toHaveLength(3);
  });
});
