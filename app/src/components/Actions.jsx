import React from 'react';

function Actions({ status, setStatus, order, setOrder }) {
  return (
    <div className='container__wrapper--content-actions'>
      <div className='form-control'>
        <label htmlFor='status'>Status</label>
        <select
          id='status'
          placeholder='Status'
          name='status'
          defaultValue={status}
          className='form-control--input'
          onChange={(evt) => {
            setStatus(evt.target.value);
          }}>
          <option value=''>All</option>
          <option value='active'>Active</option>
          <option value='away'>Away</option>
          <option value='inactive'>Inactive</option>
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='search'>Order</label>
        <select
          type='text'
          id='order'
          placeholder='Order'
          name='order'
          defaultValue={order}
          onChange={(evt) => setOrder(evt.target.value)}
          className='form-control--input'>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Actions;
