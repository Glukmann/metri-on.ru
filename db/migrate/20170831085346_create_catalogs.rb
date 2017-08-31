class CreateCatalogs < ActiveRecord::Migration
  def change
    create_table :catalogs do |t|
      t.text :name
      t.string :article
      t.string :col
      t.string :NameChar

      t.timestamps null: false
    end
  end
end
