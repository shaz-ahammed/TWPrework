import Board from './board'
import {fireEvent, render, screen} from "@testing-library/react";

describe("should render a board", () =>{
    it("should define a board", () =>{
        const {getByTestId} = render(<Board/>)
        expect(getByTestId('board')).toBeDefined()
    })
    it("should render a 9 square board",() =>{
        const {getAllByRole} = render(<Board/>)
        expect(getAllByRole('button').length).toBe(9);
    })
    it("should have initial value null", () =>{
        render(<Board/>)
        const squares=screen.getAllByRole('button');
        for (let square = 0; square <= 8 ; square++) {
            expect(squares[square]).toHaveTextContent('');
        }

    })

})
describe("Board functionality", () =>{
    it("Should alternate turns", () => {
        render(<Board />);
        const squares = screen.getAllByRole('button');

            fireEvent.click(squares[1]);
            expect(squares[1].textContent).toBe('X');

                fireEvent.click(squares[2]);
                expect(squares[2].textContent).toBe('O');

    });
    it("Should not change X if already X",()=>{
        render(<Board />);
        const squares = screen.getAllByRole('button');

        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe('X');

        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe('X');

    });

    it("Should not update square if game over", () => {
        render(<Board />);
        const squares = screen.getAllByRole('button');
        fireEvent.click(squares[0]);
        fireEvent.click(squares[3]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[2]);
        const status = screen.getByTestId("board");
        expect(status.textContent).toBe('Winner: X');
        fireEvent.click(squares[5]);
        expect(squares[5].textContent).toBe('');
    });

})