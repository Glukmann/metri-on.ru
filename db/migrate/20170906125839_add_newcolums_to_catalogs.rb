class AddNewcolumsToCatalogs < ActiveRecord::Migration
  def change
    add_column :catalogs, :odinassid, :string, null: false, index: true
    add_column :catalogs, :odinassname, :string, null: false, index: true
  end
end
