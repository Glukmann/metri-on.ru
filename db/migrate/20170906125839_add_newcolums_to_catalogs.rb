class AddNewcolumsToCatalogs < ActiveRecord::Migration
  def change
    add_column :catalogs, :odinassid, :string, index: true
    add_column :catalogs, :odinassname, :string, index: true
  end
end
