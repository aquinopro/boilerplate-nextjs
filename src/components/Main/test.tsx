import { render, fireEvent, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main />', () => {
    it('shoud render the heading', () => {
        const { container } = render(<Main />);
        expect(screen.getByRole('heading', { name: /meu texto asds top/i })).toBeInTheDocument();
        // expect(container.firstChild).toMatchSnapshot();
    });
});
