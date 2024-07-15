import React from 'react';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';

export default function MerksForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          type="text"
          name="name"
          value={form.nama}
          onChange={handleChange}
          placeholder="Masukan nama merk"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white font-medium py-2 px-5 rounded hover:bg-gray-800 shadow-md shadow-gray-500 mt-3"
        >
          {edit ? 'Ubah' : 'Simpan'}
        </Button>
      </form>
    </div>
  );
}
