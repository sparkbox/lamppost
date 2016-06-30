require_relative "../models/tag"
class PresentController < ApplicationController

  def index
    @events = Event.all.expired
    @topics = tag_data(params[:topics],'topics')
    @days  = order_days(tag_data(params[:days],'days'))
    @times = tag_data(params[:times],'times')
    @frequencies  = tag_data(params[:frequencies],'frequencies')

    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @events }
      format.rss { render :layout => false }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:name, :id, :topic_list, :time_list, :day_list, :frequency_list, :expires)
    end
end
