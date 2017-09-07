class Catalog < ActiveRecord::Base
  require 'csv'

  def self.import(file)
    CSV.foreach(file.path, headers: true, col_sep: ";") do |row|

      product_hash = row.to_hash
      product = Catalog.where(odinassid: product_hash['odinassid'])

      if product.count == 1
        product.first.update_attributes(odinassid: product_hash['odinassid'], odinassname: product_hash['odinassname'], article: product_hash['article'], col: product_hash['col'])
      else
       Catalog.create!(odinassid: product_hash['odinassid'], odinassname: product_hash['odinassname'], article: product_hash['article'], col: product_hash['col'])
       #  p = Catalog.new(odinassid: product_hash['odinassid'])
       #  p.save
      end
    end # end CSV.foreach
  end # end self.import(file)
end
