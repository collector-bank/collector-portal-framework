import { useState } from 'react';

export function useInput(initialValue: string | undefined) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setValue(event.currentTarget.value);
    };

    return { value, onChange, setValue };
}

export function useAmountInput(initialValue: number | undefined) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event: number) => {
        setValue(event);
    };

    return { value, onChange, setValue };
}
