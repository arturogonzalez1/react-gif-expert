import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests in <GifExpertApp />', () => { 

    test('Should show initial state with no gifs', () => { 

        render(<GifExpertApp />);

        const element = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(element, { target: { value: 'Goku' } });
        fireEvent.submit(form);

    });

});