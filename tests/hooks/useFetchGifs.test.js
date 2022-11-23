import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests in useFetchGifs hook', () => { 

    test('Should return inital state', () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Should return an array of gifs and isLoading should be false', async () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        // Debemos esperar a que los cambios que esperamos que sucedan pasen.
        await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
    });

});