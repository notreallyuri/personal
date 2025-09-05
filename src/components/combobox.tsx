'use client';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type BaseProps = {
  placeholder?: string;
  inputPlaceholder?: string;
  emptyStateMessage?: string;
  options: { label: string; value: string }[];
};

type ComboBoxProps = BaseProps & {
  value: string;
  setValue: (value: string) => void;
};

type MultiComboBoxProps = BaseProps & {
  values: string[];
  setValue: (values: string[]) => void;
};

export function ComboBox({
  placeholder,
  inputPlaceholder,
  emptyStateMessage,
  options,
  value,
  setValue,
}: ComboBoxProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-full justify-between hover:bg-background/75"
          role="combobox"
          size="default"
          variant="outline"
        >
          <span className="truncate">
            {options.find((option) => option.value === value)?.label ??
              placeholder}
          </span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder={inputPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyStateMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    if (value === option.value) {
                      setValue('');
                    } else {
                      setValue(option.value);
                    }
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type MultiComboBoxPillProps = {
  option: { label: string; value: string };
  onRemove: () => void;
};

function MultiComboBoxPill({ option, onRemove }: MultiComboBoxPillProps) {
  return (
    <button
      className={cn(
        'group flex select-none items-center gap-2 rounded-lg border border-sidebar-border bg-accent px-2 text-accent-foreground text-sm',
        'border-sidebar-border/80 transition-colors hover:bg-accent/80 hover:text-accent-foreground/80'
      )}
      key={option.value}
      onClick={onRemove}
      type="button"
    >
      {option.label}
      <X className="size-4 transition-colors group-hover:text-destructive" />
    </button>
  );
}

export function MultiComboBox({
  placeholder,
  inputPlaceholder,
  emptyStateMessage,
  options,
  values,
  setValue,
}: MultiComboBoxProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="relative w-full max-w-72 justify-between"
          role="combobox"
          size="default"
          variant="outline"
        >
          <span className="truncate pr-6">
            {options
              .filter((option) => values.includes(option.value))
              .map((option) => option.label)
              .join(', ') || placeholder}
          </span>
          <ChevronsUpDown className="absolute right-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <div className="peer flex max-h-24 flex-wrap gap-2 overflow-y-auto has-[button]:p-2">
          {options
            .filter((option) => values.includes(option.value))
            .map((option) => (
              <MultiComboBoxPill
                key={option.value}
                onRemove={() => {
                  setValue(values.filter((value) => value !== option.value));
                }}
                option={option}
              />
            ))}
        </div>
        <Command className="peer-has-[button]:rounded-t-none">
          <CommandInput placeholder={inputPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyStateMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    if (values.includes(option.value)) {
                      setValue(
                        values.filter((value) => value !== option.value)
                      );
                    } else {
                      setValue([...values, option.value]);
                    }
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      values.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
