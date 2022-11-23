import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => { 

    const category = 'One Punch';
    const loadingText = 'Cargando...';

    test('Should show loading first', () => { 

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });

        render(<GifGrid category={ category }/>)
        expect(screen.getByText(loadingText)).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    });

    test('Should show gifs when the images are loaded with useFetchGifs', () => { 

        const gifs = [
            {
                id: 'FA099S89238KJAF',
                title: 'Saitama',
                url: 'https://saitama.com/img.jpg'
            },
            {
                id: 'LAOIUESORF879',
                title: 'Goku',
                url: 'https://goku.com/img.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false,
        });

        render(<GifGrid category={ category }/>);
        
        expect(screen.getAllByRole('img').length).toBe(gifs.length);

     });

});