xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Lamp-Post"
    xml.description "A place where events gather"
    xml.link root_url
    xml.lanuage "en-us"
    @events.each do |event|
      xml.item do
        xml.title event.name
        xml.when event.when
        xml.description event.description
        xml.location do
          xml.location_name event.location_name
          xml.street_address event.street_address
          xml.city event.city
          xml.state event.state
          xml.zipcode event.zipcode
          xml.map event.g_maps_link
        end
        xml.image "#{event_url(event)}.png"
      end
    end
  end
end
