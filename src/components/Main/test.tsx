import { render, fireEvent, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main />', () => {
    /** TEST DESCRIPTION **/
    it('shoud render the heading', () => {
        const { container } = render(<Main />);
        expect(screen.getByRole('heading', { name: /meu texto top/i })).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    /** TEST DESCRIPTION **/
    it('shoud render color correctly', () => {
        const { container } = render(<Main />);
        expect(container.firstChild).toHaveStyle({
            backgroundColor: '#5B00EB',
        });
    });
});
