class Location < ActiveRecord::Base
	has_many :comments
	validates :city, :state, presence: true

end
