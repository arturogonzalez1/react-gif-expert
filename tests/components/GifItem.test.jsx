import { fireEvent, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Tests in <GifItem />', () => { 

    const gif = {
        title: 'Testing',
        url: 'https://media2.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=a1b35471wn01jazq3si2xfrmhhgzm69swo4z05tuy35goyep&rid=giphy.gif&ct=g',
    }

    test('Should match with snapshot', () => { 
        
        const { container } = render(<GifItem { ...gif }/>);
        expect(container).toMatchSnapshot();

    });

    test('Should show an especific url and alt', () => { 

        render(<GifItem { ...gif }/>);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(gif.url);
        expect(alt).toBe(gif.title);

    });

    test('Should show title in the component', () => { 

        render(<GifItem { ...gif }/>);
        expect(screen.getByText(gif.title)).toBeFalsy();

    });

});