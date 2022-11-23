import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests in <AddCategory />', () => { 

    test('Should change the text value', () => { 

        render(<AddCategory onNewCategory={ () => {} } />);
        const element = screen.getByRole('textbox');
        
        fireEvent.input(element, { target: { value: 'Saitama' } });

        expect(element.value).toBe('Saitama');

    });

    test('Should call onNewCategory if input has value', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        const element = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(element, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(element.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('Should not call onNewCategory of input value is empty', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();

    });

});