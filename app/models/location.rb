class Location < ActiveRecord::Base
	has_many :comments
	validates :city, presence: true

end
